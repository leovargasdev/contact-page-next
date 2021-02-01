export const phoneMask = (value: string): string => {
  const newValue = value.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '($1) $2')
  // Formata os caracteres após o hífen do telefone
  if (newValue.length > 6) return newValue.replace(/(\d{5})(\d{1,4})/, '$1-$2')

  return newValue
}
