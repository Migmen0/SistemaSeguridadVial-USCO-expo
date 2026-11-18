# 🚦 Sistema Inteligente para la Predicción y Prevención de Riesgos en la Seguridad Vial Urbana

[![Universidad Surcolombiana](https://img.shields.io/badge/USCO-Facultad%20de%20Ingeniería-teal)](https://www.usco.edu.co/)
[![Python](https://img.shields.io/badge/Python-3.10%2B-blue)](https://www.python.org/)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-Machine%20Learning-orange)](https://scikit-learn.org/)
[![Licencia](https://img.shields.io/badge/Licencia-Académica-green)]()

Trabajo de Grado / Proyecto Académico presentado por **Miguel Esteban Mendoza Calderón** para optar al título de **Ingeniero de Software** en el programa de Ingeniería de Software de la **Universidad Surcolombiana (USCO)**, Neiva, Huila, Colombia (2026).

---

## 📋 Descripción del Proyecto
Este sistema implementa una arquitectura completa de ciencia de datos y aprendizaje automático para procesar, auditar y analizar los registros oficiales de vehículos involucrados en accidentes de tránsito en Colombia bajo los lineamientos de la **Ley 2251 de 2022 (Ley Julián Esteban)** y el enfoque de *Sistema Seguro*.

El objetivo principal es clasificar y predecir la gravedad registrada del evento (**CON HERIDOS vs. CON MUERTOS**) mediante un sistema de ensamble ponderado que unifica cuatro algoritmos obligatorios.

---

## 📊 Resumen de Auditoría y Datos
* **Registros Originales (CSV Crudo):** 450.335 observaciones institucionales.
* **Limpieza y Deduplicación:** Se eliminaron 159.399 filas exactamente duplicadas para prevenir estrictamente la fuga de datos (*data leakage*) entre entrenamiento y prueba.
* **Conjunto Final de Modelado:** 290.936 registros únicos y 12 variables analíticas (cubriendo el periodo de enero de 2022 a septiembre de 2026).
* **Distribución de la Variable Objetivo:** 91,99% con heridos y 8,01% con muertos.

---

## 🧠 Modelos Predictivos y Ensamble Ponderado
El sistema entrena, evalúa y compara cuatro algoritmos utilizando Pipelines con aislamiento estricto de transformaciones:
1. **Random Forest (Peso: 40%):** Mejor desempeño integral (Balanced Accuracy de 70,26% y Recall en la clase fatal del 60,94%).
2. **Support Vector Machine - LinearSVC (Peso: 30%):** Margen optimizado de alta escalabilidad (Recall de 57,50%).
3. **K-Nearest Neighbors - KNN (Peso: 15%):** Vecindad geométrica con ponderación de distancia.
4. **Regresión Lineal (Peso: 15%):** Modelo de probabilidad lineal de referencia umbralizado en 0,50.

---

## ⚙️ Estructura del Repositorio
```text
SistemaSeguridadVial-USCO/
├── data/
│   ├── raw/           # Dataset original inmutable (.csv)
│   └── processed/     # Dataset limpio de modelado (vehiculos_limpios.csv)
├── models/            # Modelos serializados (.joblib) y metadatos
├── reports/           # Informes de auditoría y métricas comparativas (.json, .csv)
├── src/               # Scripts ejecutables de Python
│   ├── data_utils.py  # Funciones de carga, normalización y limpieza
│   ├── clean_dataset.py# Pipeline ejecutable de auditoría
│   └── train_models.py# Entrenamiento, validación y métricas
├── css/               # Hojas de estilo personalizadas (Tailwind & Glassmorphism)
├── images/            # Recursos gráficos y fondos urbanos
├── index.html         # Página de inicio del prototipo web
├── problema.html      # Planteamiento del problema y marco legal
├── datos.html         # Auditoría y preparación de datos
├── eda.html           # Análisis exploratorio (EDA)
├── modelos.html       # Comparativa de algoritmos y matrices de confusión
├── simulador.html     # Simulador interactivo en tiempo real con ensamble
└── conclusiones.html  # Conclusiones y recomendaciones de prevención vial