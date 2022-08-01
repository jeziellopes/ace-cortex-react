export const hasLetters = (value: string) => /[a-zA-Z]/.test(value)

export const hasOnlySpecialChars = (value: string) =>
  /^[^a-zA-Z0-9]+$/.test(value)

export const hasCorrectCNPJChars = (value: string) => {
  if (value.at(2) !== undefined && value.at(2) !== `.`) {
    return false
  }
  if (value.at(6) !== undefined && value.at(6) !== `.`) {
    return false
  }
  if (value.at(10) !== undefined && value.at(10) !== `/`) {
    return false
  }
  if (value.at(15) !== undefined && value.at(15) !== `-`) {
    return false
  }
  return true
}

export const formatCnpj = (value: string) => {
  if (!value) return null

  const rawValue = value.toString().replace(/\D/g, ``)

  if (rawValue.length < 14) return rawValue.toString()

  return rawValue.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    `$1.$2.$3/$4-$5`
  )
}

export const dynamicFormatCNPJ = (value: string) => {
  if (!value) return null

  if (hasLetters(value)) return false

  const rawValue = value.toString().replace(/\D/g, ``)

  if (rawValue.length < 2) {
    return rawValue
  }
  if (rawValue.length >= 2 && rawValue.length < 5) {
    return rawValue.replace(/(\d{2})/, `$1.`)
  }
  if (rawValue.length >= 5 && rawValue.length < 8) {
    return rawValue.replace(/(\d{2})(\d{3})/, `$1.$2.`)
  }
  if (rawValue.length >= 8 && rawValue.length < 12) {
    return rawValue.replace(/(\d{2})(\d{3})(\d{3})/, `$1.$2.$3/`)
  }
  if (rawValue.length >= 12 && rawValue.length < 14) {
    return rawValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, `$1.$2.$3/$4-`)
  }
  return formatCnpj(value)
}
