export const crearRamdonUser = (length = 8) => {
  const adjetivos = [
    'amable',
    'agresivo',
    'cautivo',
    'cooperativo',
    'curioso',
    'decidido',
    'determinado',
    'empático',
    'experto',
    'honesto',
    'inteligente',
    'justo',
    'libre',
    'loving',
    'modesto',
    'nulo',
    'optimista',
    'paternal',
    'perspicaz',
    'proactivo',
    'resiliente',
    'sincero',
    'sociable',
    'tolerante',
    'vigilante',
  ]
  const nombres = [
    'Aaron',
    'Abel',
    'Adrian',
    'Aidan',
    'Alex',
    'Alfonso',
    'Ali',
    'Alvaro',
    'Amancio',
    'Anderson',
    'Angel',
    'Anibal',
    'Anthony',
    'Antonio',
    'Armando',
    'Arthur',
    'Arturo',
    'Asher',
    'Austin',
    'Ava',
    'Axel',
    'Ayden',
    'Barrett',
    'Benedict',
    'Benjamin',
    'Blake',
    'Brandon',
    'Brian',
    'Brody',
    'Bryan',
    'Caleb',
    'Cameron',
    'Carlos',
    'Carmelo',
    'Christopher',
    'Claudia',
    'Colton',
  ]
  const ramdonItems = (array: string[]) =>
    array[Math.floor(Math.random() * array.length)]

  let username = ''
  username += ramdonItems(adjetivos)
  username += ramdonItems(nombres)
  username += Math.floor(Math.random() * 10000)
  if (username.length > length) {
    username = username.substring(0, length)
  }
  return username
}
