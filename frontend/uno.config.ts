import { defineConfig, presetIcons, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'footer-text': 'font-normal text-15px',
      'footer-link': 'hover:underline'
    }
  ],
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
  ]
})
