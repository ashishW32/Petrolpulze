export type FuelStatus = 'available' | 'limited' | 'out' | 'ev';

export interface FuelInfo {
  type: string;
  status: FuelStatus;
  stock: number;
  price: string;
  label?: string;
}

export interface Station {
  id: string;
  name: string;
  address: string;
  distance: string;
  travelTime: string;
  rating: number;
  status: 'open' | 'low' | 'out' | 'ev';
  availability: number;
  tags: string[];
  services: string[];
  hours: string;
  phone: string;
  fuels: FuelInfo[];
}
