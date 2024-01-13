import { describe, expect, it } from 'vitest'
import { dateCounter } from '../src/utils/counter'

describe('Test 1', () => {
  it('should return an object with properties for minutes, hours, days, and months', () => {
    const result = dateCounter({ date: '2024-03-22' })
    expect(result).toHaveProperty('minutes')
    expect(result).toHaveProperty('hours')
    expect(result).toHaveProperty('days')
    expect(result).toHaveProperty('months')
  })

  // Calculates the correct number of minutes left until the event date
  it('should calculate the correct number of minutes left until the event date', () => {
    const now = new Date('2024-01-11T08:02:00').getTime()
    const result = dateCounter({ date: '2024-03-22', now })
    // Calculate the expected minutes left until the event date
    expect(result.minutes).toBe(58)
  })

  // Calculates the correct number of hours left until the event date
  it('should calculate the correct number of hours left until the event date', () => {
    const now = new Date('2024-01-11T09:04:00').getTime()
    const result = dateCounter({ date: '2024-03-22', now })
    // Calculate the expected hours left until the event date
    expect(result.hours).toBe(14)
  })

  // Handles events that occur exactly at the current time
  it('Should handle when the event occur exactly at the current time', () => {
    const now = new Date('2024-03-22T00:00:00').getTime()
    const result = dateCounter({ date: '2024-03-22', now })
    expect(result.minutes).toBe(0)
    expect(result.hours).toBe(0)
    expect(result.days).toBe(0)
    expect(result.months).toBe(0)
  })

  it.skip('Should handle when the current time is after the event', () => {
    const now = new Date('2024-03-23T00:00:00').getTime()
    const result = dateCounter({ date: '2024-03-22', now })
    expect(result.minutes).toBe(0)
    expect(result.hours).toBe(0)
    expect(result.days).toBe(0)
    expect(result.months).toBe(0)
  })

})

