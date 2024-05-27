const { UAHmerchant } = require('../config/merchant')
const { approved_no_3ds } = require('../config/card')

module.exports = [
  [
    {
      options: {
        api_domain: 'api.albpay.io',
      },
      params: {
        ...UAHmerchant,
        amount: 100,
        email: 'test@test.test',
        required_rectoken: 'y',
        response_url: 'https://api.albpay.io/test/responsepage/',
      },
    },
    {
      ...approved_no_3ds,
    },
  ],
]
