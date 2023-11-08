/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category ConfigTransactionExecute
 * @category generated
 */
export const configTransactionExecuteStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ConfigTransactionExecuteInstructionArgs'
)
/**
 * Accounts required by the _configTransactionExecute_ instruction
 *
 * @property [_writable_] multisig
 * @property [**signer**] member
 * @property [_writable_] proposal
 * @property [_writable_] transaction
 * @property [_writable_, **signer**] rentPayer (optional)
 * @category Instructions
 * @category ConfigTransactionExecute
 * @category generated
 */
export type ConfigTransactionExecuteInstructionAccounts = {
  multisig: web3.PublicKey
  member: web3.PublicKey
  proposal: web3.PublicKey
  transaction: web3.PublicKey
  rentPayer?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const configTransactionExecuteInstructionDiscriminator = [
  114, 146, 244, 189, 252, 140, 36, 40,
]

/**
 * Creates a _ConfigTransactionExecute_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ConfigTransactionExecute
 * @category generated
 */
export function createConfigTransactionExecuteInstruction(
  accounts: ConfigTransactionExecuteInstructionAccounts,
  programId = new web3.PublicKey('SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf')
) {
  const [data] = configTransactionExecuteStruct.serialize({
    instructionDiscriminator: configTransactionExecuteInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.multisig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.member,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.transaction,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rentPayer ?? programId,
      isWritable: accounts.rentPayer != null,
      isSigner: accounts.rentPayer != null,
    },
    {
      pubkey: accounts.systemProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
