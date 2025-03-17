// src/components/sections/ProductsSection.tsx
'use client'

import { memo } from 'react'
import { ProjectVideo } from '../media/ProjectVideo'
import { Section } from './Section'

interface Product {
  name: string
  description: string
  video: string
  link: string
}

interface ProductsSectionProps {
  products: Product[]
}

export const ProductsSection = memo(({ products }: ProductsSectionProps) => (
  <Section id="products-heading" title="Products">
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      {products.map((product) => (
        <div key={product.name} className="space-y-4">
          <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <ProjectVideo src={product.video} alt={product.name} />
          </div>
          <div className="px-1">
            <a
              className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {product.name}
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
            </a>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </Section>
))

ProductsSection.displayName = 'ProductsSection'
