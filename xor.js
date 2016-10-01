function isXor(a1, a2) {
  return !(a1 && a2 || !a1 && !a2)
}

exports.f = isXor;