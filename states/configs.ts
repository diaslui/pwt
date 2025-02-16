/** config.ts 
 * © 2024 Personal Wallet By Pedro Luis Dias (github.com/diaslui)
 * --> https://github.com/diaslui/pwt <--
 * All App Configs
 */
export const MaxPinTries = 3;
export enum AppState {
    UnsetedPin, //initial for set pin
    Locked, //  for write pin
    App, // app
    Bannded, // blocked page
}

