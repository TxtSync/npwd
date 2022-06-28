import { config } from '../config';
import DbInterface from '../db/db_wrapper';

export class PlayerRepo {
  async fetchIdentifierFromPhoneNumber(phoneNumber: string): Promise<string | null> {
    return await global.exports['vmp-server'].phoneFetchIdentifierFromPhoneNumber(phoneNumber);
  }

  async fetchPhoneNumberFromIdentifier(identifier: string) {
    return await global.exports['vmp-server'].phoneFetchPhoneNumberFromIdentifier(identifier);
  }
}

export default new PlayerRepo();
