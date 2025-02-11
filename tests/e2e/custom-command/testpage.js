const {
  $tp_merchant_id,
  $tp_currency,
  $tp_amount,
  $tp_submit,
  $tp_verification,
  $tp_verification_type,
  $tp_required_rectoken,
  $tp_rectoken,
  $root_checkout_v1,
} = require('../config/selector')

exports.command = function(options) {
  const {
    merchant_id,
    currency,
    amount,
    verification,
    verification_type,
    required_rectoken,
    rectoken,
  } = options.params
  return this.url('https://api.albpay.io/test/testpage')
    .ifClearSetValue($tp_merchant_id, merchant_id)
    .ifClearSetValue($tp_currency, currency)
    .ifClearSetValue($tp_amount, amount)
    .ifClearSetValue($tp_amount, amount)
    .ifClearSetValue($tp_verification, verification)
    .ifClearSetValue($tp_verification_type, verification_type)
    .ifClearSetValue($tp_required_rectoken, required_rectoken)
    .ifClearSetValue($tp_rectoken, rectoken)
    .click($tp_submit)
    .waitForElementVisible($root_checkout_v1)
    .url(function(result) {
      options.params.token = result.value.split('=')[1]
      delete options.params.amount
      delete options.params.currency
    })
}
