#  Playwright E2E - Floristería Mundo Flor

Automatización E2E con **Playwright + TypeScript** para validar flujos del sitio [Floristería Mundo Flor](https://www.floristeriamundoflor.com/).

El proyecto cubre:
- Agregar dos productos al carrito y validar precios/subtotal.
- Limpiar el carrito y verificar que quede vacío.
- Uso de `storageState` para compartir sesión entre tests.

---

## 🚀 Cómo correr las pruebas

Instala dependencias:
```bash
npm install
npx playwright install
```

### Correr todas las pruebas
```bash
npx playwright test
```

### Solo agregar productos
```bash
npx playwright test --project=cart-setup
```

### Solo limpiar carrito
```bash
npx playwright test --project=cart-cleanup
```

*(Playwright ya sabe que `cart-cleanup` depende del estado generado por `cart-setup`.)*

---

## 🧩 Estructura básica

```
tests/
 ├─ e2e/
 │   ├─ add.two.products.spec.ts
 │   └─ delete.products.spec.ts
 └─ fixtures/fixtures.ts
test-data/
 ├─ add-scenarios.ts
 └─ cleanup-scenarios.ts
lib/
 ├─ pages/
 ├─ locators/
 └─ utils/
playwright.config.ts
```

---

## 📸 Reporte

Después de ejecutar:
```bash
npx playwright show-report
```

---
## Inicialización del proyecto

### Si **clonas** este repo
```bash
git clone https://github.com/Aleja01/test-playwright.git
cd test-playwright
npm install
npx playwright install
```

### Si **inicias desde cero**
Elige **una** de estas dos rutas (no las mezcles):

**Ruta A — mínima + manual**
```bash
npm init -y
npm i -D @playwright/test
npx playwright install
```

**Ruta B — asistida por el generador**
```bash
npm init playwright@latest
# Sigue el asistente y selecciona TypeScript
```

---

**Autor:** Alejandra Fiscal  
Proyecto de pruebas automatizadas con Playwright y TypeScript 
