declare module 'three/examples/jsm/controls/OrbitControls' {
  export class OrbitControls {
    constructor(object: any, domElement?: any)
    enableZoom: boolean
    enablePan: boolean
    enableDamping: boolean
    dampingFactor: number
    rotateSpeed: number
    update(): void
    dispose(): void
  }
}


