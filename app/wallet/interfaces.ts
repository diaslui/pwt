import { itemWalletType  } from "./walletItemType";
interface Wallet {
    name?: string;
    currency: string;
    itens: WalletItem[];
}

interface WalletItem {
    id: number;
    name: string;
    description?: string;
    date: Date;
    type: itemWalletType | string; // string for custom types
}