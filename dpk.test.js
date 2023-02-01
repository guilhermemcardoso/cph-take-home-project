const { deterministicPartitionKey } = require('./dpk')

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey()
    expect(trivialKey).toBe('0')
  })

  it("Returns the literal '0' when given input is equal to 0", () => {
    const trivialKey = deterministicPartitionKey(0)
    expect(trivialKey).toBe('0')
  })

  it("Returns the literal '0' when given input is equal to false", () => {
    const trivialKey = deterministicPartitionKey(false)
    expect(trivialKey).toBe('0')
  })

  it('Returns a 128 chars hash when given input is greater than 0', () => {
    const trivialKey = deterministicPartitionKey(3)
    expect(trivialKey.length).toBe(128)
  })

  it('Returns a 128 chars hash when given input is a non-empty string', () => {
    const trivialKey = deterministicPartitionKey('anything')
    expect(trivialKey.length).toBe(128)
  })

  it('Returns a 128 chars hash when given input is equal to true', () => {
    const trivialKey = deterministicPartitionKey(true)
    expect(trivialKey.length).toBe(128)
  })

  it('Returns a 128 chars hash when given input is an empty object', () => {
    const trivialKey = deterministicPartitionKey({})
    expect(trivialKey.length).toBe(128)
  })

  it('Returns a 128 chars hash when given input is an object containing a partitionKey property and its value is null', () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: null })
    expect(trivialKey.length).toBe(128)
  })

  it('Returns a 128 chars hash when given input is an object containing a partitionKey property and its value is 0', () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 0 })
    expect(trivialKey.length).toBe(128)
  })

  it('Returns a 128 chars hash when given input is an object containing a partitionKey property and its value is false', () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: false })
    expect(trivialKey.length).toBe(128)
  })

  it('Returns input as a string when given input is an object containing a partitionKey property and its value is greater than 0', () => {
    const partitionKey = 7
    const trivialKey = deterministicPartitionKey({ partitionKey })
    expect(trivialKey).toBe(JSON.stringify(partitionKey))
  })

  it('Returns input as a string when given input is an object containing a partitionKey property and its value is a non-empty string', () => {
    const partitionKey = 'non-empty'
    const trivialKey = deterministicPartitionKey({ partitionKey })
    expect(trivialKey).toBe(partitionKey)
  })

  it('Returns the input as a string when given input is an object containing a partitionKey property and its value is true', () => {
    const partitionKey = true
    const trivialKey = deterministicPartitionKey({ partitionKey })
    expect(trivialKey).toBe(JSON.stringify(partitionKey))
  })

  it('Returns a 128 chars hash when given input is an object containing a partitionKey and its length is greater than 256 chars', () => {
    const partitionKey =
      'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a86287346'
    const trivialKey = deterministicPartitionKey({ partitionKey })
    expect(trivialKey.length).toBe(128)
  })
})
