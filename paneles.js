const main = (x, y, a, b) => {
  // Sacar medidas
  const longRoof = Math.max(x, y)
  const shortRoof = Math.min(x, y)
  const longPanel = Math.max(a, b)
  const shortPanel = Math.min(a, b)
  // Chechear si se pueden posicionar vertical y horizontal
  const condition1 = shortPanel <= longRoof && longPanel <= shortRoof
  const condition2 = shortPanel <= shortRoof && longPanel <= longRoof
  // Calcula cantidad de paneles por cada una de las 4 opciones de linea
  const option1Panel = Math.floor(longRoof / shortPanel)
  const option2Panel = Math.floor(shortRoof / shortPanel)
  const option3Panel = Math.floor(shortRoof / longPanel)
  const option4Panel = Math.floor(longRoof / longPanel)
  // Calcular total
  if (condition1 && condition2) {
    return Math.max(
      option1Panel + main(shortRoof - longPanel, longRoof, a, b),
      option2Panel + main(longRoof - longPanel, shortRoof, a, b),
      option3Panel + main(longRoof - shortPanel, shortRoof, a, b),
      option4Panel + main(shortRoof - shortPanel, longRoof, a, b)
    )
  } else if (condition1) {
    return Math.max(
      option1Panel + main(shortRoof - longPanel, longRoof, a, b),
      option3Panel + main(longRoof - shortPanel, shortRoof, a, b)
    )
  } else if (condition2) {
    return Math.max(
      option2Panel + main(longRoof - longPanel, shortRoof, a, b),
      option4Panel + main(shortRoof - shortPanel, longRoof, a, b)
    )
  } else {
    return 0
  }
}

console.log(main(3, 5, 1, 2));