const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const copy = utils.trimProperties(input)
    expect(input).not.toEqual(copy)
  })

})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const copy = utils.trimProperties(input)
    expect(input).toEqual(copy)
    expect(input).toBe(copy)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const array = [
      {integer: 10}, 
      {integer: 543}, 
      {integer: 93}, 
      {integer: 0}, 
      {integer: -20}, 
      {integer: 6}
    ]
    const result = utils.findLargestInteger(array)
    expect(result).toBe(543)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const firstCount = counter.countDown()
    expect(firstCount).toBe(3)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const firstCount = counter.countDown()
    const secondCount = counter.countDown(firstCount)
    expect(secondCount).toBe(2)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    const firstCount = counter.countDown()
    const secondCount = counter.countDown(firstCount)
    const thirdCount = counter.countDown(secondCount)
    const fourthCount = counter.countDown(thirdCount)

    expect(thirdCount).toBe(0)
    expect(thirdCount).not.toBeLessThan(0)
    expect(fourthCount).not.toBeLessThan(0)
    expect(fourthCount).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  test('[9] the FIRST Count of seasons.next returns "summer"', () => {
    const firstSeason = seasons.next()
    expect(firstSeason).toBe('summer')
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const firstSeason = seasons.next()
    const secondSeason = seasons.next()
    expect(secondSeason).toBe('fall')
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const firstSeason = seasons.next()
    const secondSeason = seasons.next()
    const thirdSeason = seasons.next()
    expect(thirdSeason).toBe('winter')
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const firstSeason = seasons.next()
    const secondSeason = seasons.next()
    const thirdSeason = seasons.next()
    const fourthSeason = seasons.next()
    expect(fourthSeason).toBe('spring')
  })

  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for(let i = 0; i < 4; i++){
      seasons.next()
    }
    const fifthSeason = seasons.next()
    expect(fifthSeason).toBe('summer')
  })

  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for(let i = 0; i < 39; i++){
      seasons.next()
    }
    const fortySeason = season.next()
    expect(fortySeason).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })

  test('[15A] car is defined', () => {
    expect(focus).toBeDefined()
    expect(focus).toBeInstanceOf(Function)
  })

  test('[15B] driving the car returns the updated odometer', () => {
    focus.drive(19)
    expect(focus.odometer).toBe(19)
    focus.drive(11)
    expect(focus.odometer).toBe(30)
  })

  test('[16] driving the car uses gas', () => {
    focus.drive(10)
    expect(focus.tankSize).toBeLessThan(30)
  })

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tankSize).toBe(0)
    focus.refuel(15)
    expect(focus.tankSize).toBe(15)
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tankSize).toBe(30)
    focus.refuel(10)
    expect(focus.tankSize).not.toBeGreaterThan(30)
    expect(focus.tankSize).toBe(30)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const evenNum = utils.isEvenNumberAsync(6)
    expect(evenNum).toBe(true)
    expect(evenNum).not.toBe(false)
    expect(evenNum).toBeTruthy()
  })

  test('[20] resolves false if passed an odd number', async () => {
    const oddNum = util.isEvenNumberAsync(9)
    expect(oddNum).not.toBe(true)
    expect(oddNum).toBe(false)
    expect(oddNum).toBeFalsy()
  })
})
