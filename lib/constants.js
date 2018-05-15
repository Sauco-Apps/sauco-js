/**
 * `constants` are the objects containing information about the fee size for different tranasctions.
 *
 * @property constants
 * @static
 * @type object
 */

module.exports = {
	fees: {
		send: 100000,
		secondsignature: 10000000,
		delegate: 3000000000,
		vote: 100000000,
		multisignature: 50000000,
		dapp: 2000000000
	},
	fee: {
		0: 100000,
		1: 10000000,
		2: 3000000000,
		3: 100000000,
		4: 50000000,
		5: 2000000000
	}
};
