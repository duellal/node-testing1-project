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
    const copy = utils.trimPropertiesMutation(input)
    expect(copy).toEqual(input)
    expect(copy).toBe(input)
  }
  )
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
    counter.countDown()
    const secondCount = counter.countDown()
    expect(secondCount).toBe(2)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    const fourthCount = counter.countDown()
    const fifthCount = counter.countDown()

    expect(fourthCount).toBe(0)
    expect(fourthCount).not.toBeLessThan(0)
    expect(fifthCount).not.toBeLessThan(0)
    expect(fifthCount).toBe(0)
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
    const fortySeason = seasons.next()
    expect(fortySeason).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })

  test('[15A] car is defined', () => {
    expect(utils.Car).toBeDefined()
    expect(utils.Car).toBeInstanceOf(Function)
  })

  test('[15B] driving the car returns the updated odometer', () => {
    focus.drive(19)
    expect(focus.odometer).toBe(19)
    focus.drive(11)
    expect(focus.odometer).toBe(30)
  })

  test('[16] driving the car uses gas', () => {
    focus.drive(10)
    expect(focus.tank).toBeLessThan(20)
  })

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
    focus.refuel(15)
    expect(focus.tank).toBe(15)
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toBe(20)
    focus.refuel(10)
    expect(focus.tank).not.toBeGreaterThan(20)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const evenNum = await utils.isEvenNumberAsync(6)
      .then(res => {
        return res
      })
      .catch(err => {
        return err
      })

    expect(evenNum).toBe(true)
    expect(evenNum).not.toBe(false)
    expect(evenNum).toBeTruthy()
  })

  test('[20] resolves false if passed an odd number', async () => {
    const oddNum = await utils.isEvenNumberAsync(9)
    expect(oddNum).not.toBe(true)
    expect(oddNum).toBe(false)
    expect(oddNum).toBeFalsy()
  })
})
