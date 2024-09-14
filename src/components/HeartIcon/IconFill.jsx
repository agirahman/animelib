'use client'

import {Heart} from '@phosphor-icons/react'

const FillIcon = () => {
    return (
        <button className="absolute top-1 right-1">
          <Heart size={32} color="#ff0000" weight="fill" />
        </button>
    )
}

export default FillIcon