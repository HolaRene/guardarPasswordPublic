'use client'
import React from 'react'
import { RepitedPasswordChartProps } from './RepitedPasswordChart.type'

import { TrendingUp } from 'lucide-react'
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export default function RepitedPasswordChart(props: RepitedPasswordChartProps) {
  const { repetidos, unicos } = props

  const totalContraseñas = unicos + repetidos
  const chartData = [{ month: '', unicos: unicos, repetidos: repetidos }]
  const chartConfig = {
    unicos: {
      label: 'unicos',
      color: 'hsl(var(--chart-1))',
    },
    repetidos: {
      label: 'repetidas',
      color: 'hsl(var(--chart-2))',
    },
  } satisfies ChartConfig

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Contraseñas repetidas vs únicas</CardTitle>
        <CardDescription>Revisa tus contraseñas - marzo 2025</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-1 items-center pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square w-full max-w-[250px]'
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle'>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className='fill-foreground text-2xl font-bold'
                        >
                          {totalContraseñas.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className='fill-muted-foreground'
                        >
                          contraseñas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey='unicos'
              stackId='a'
              cornerRadius={5}
              fill={chartConfig.unicos.color}
              className='stroke-transparent stroke-2'
            />
            <RadialBar
              dataKey='repetidos'
              fill={chartConfig.repetidos.color}
              stackId='a'
              cornerRadius={5}
              className='stroke-transparent stroke-4'
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Intenta a no tener la misma contraseña{' '}
          <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Mostrar todas las contraseñas creadas
        </div>
      </CardFooter>
    </Card>
  )
}
