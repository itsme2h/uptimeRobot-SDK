
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UptimerobotSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = UptimerobotSDK.test()
    equal(testsdk instanceof UptimerobotSDK, true,
      'UptimerobotSDK.test() must return a client synchronously')
  })

})
