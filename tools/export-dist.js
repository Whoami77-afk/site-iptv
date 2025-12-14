import { cp, rm, mkdir } from 'fs/promises'
import path from 'path'

async function run() {
  const root = path.resolve(process.cwd())
  const dist = path.join(root, 'dist')
  const out = path.join(root, 'publish')

  try {
    await rm(out, { recursive: true, force: true })
  } catch (e) {
    // ignore
  }

  await mkdir(out, { recursive: true })
  // copy dist/* -> publish/
  await cp(dist, out, { recursive: true })
  console.log('Copied dist -> publish. Upload the `publish/` folder to your host.')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
