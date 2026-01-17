
export interface NetworkNode {
  id: string;
  name: string;
  type: 'hub' | 'city' | 'satellite';
  lat: number;
  lng: number;
  status: 'active' | 'warning' | 'error';
}

export interface MetricData {
  time: string;
  latency: number;
  throughput: number;
}

export interface OracleMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export enum NetworkStatus {
  OPTIMAL = 'OPTIMAL',
  HEALING = 'HEALING',
  CONGESTED = 'CONGESTED'
}
