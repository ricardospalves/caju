const REGEX = {
  hasDigits(value: string) {
    return /\d/.test(value)
  },
  startsWithLetter(value: string) {
    return /^[a-zA-Z]/.test(value)
  },
  hasWhiteSpace(value: string) {
    return /\s/.test(value)
  },
}

export const isValidProperNoun = (value: string) => {
  if (REGEX.hasDigits(value)) {
    return false
  }

  if (REGEX.startsWithLetter(value) === false) {
    return false
  }

  if (REGEX.hasWhiteSpace(value) === false) {
    return false
  }

  if (value.length < 3) {
    return false
  }

  return true
}
