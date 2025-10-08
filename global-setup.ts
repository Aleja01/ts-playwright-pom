import { chromium, FullConfig } from '@playwright/test';


export default async function globalSetup(config: FullConfig) {
const browser = await chromium.launch();
const context = await browser.newContext();
const baseURL = config.projects[0].use?.baseURL as string;
const page = await context.newPage();


await page.goto(baseURL);


// ✅ Dismiss de disclaimers/cookies si aplican
// Usa selectores SEMÁNTICOS/estables: role, data-testid, texto claro
const cookieBtn = page.getByRole('button', { name: /aceptar|accept|got it/i });
if (await cookieBtn.isVisible().catch(() => false)) {
await cookieBtn.click();
}


// Guarda estado para reutilizar en los tests
await context.storageState({ path: '.auth/state.json' });
await browser.close();
}