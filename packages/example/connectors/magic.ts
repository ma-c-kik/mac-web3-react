import { initializeConnector } from 'mac-web3-react-core'
import { Magic } from 'mac-web3-react-magic'

export const [magic, hooks] = initializeConnector<Magic>(
  (actions) =>
    new Magic(actions, {
      apiKey: process.env.magicKey,
    })
)
