# Guía para agentes

## Infraestructura y flujo de trabajo

El nodo principal de trabajo y automatización es el **Mac mini** (`ssh mini`, o Tailscale desde fuera de casa); la MacBook puede estar apagada. GitHub (`camifran/*`, repos privados) es la fuente de verdad: `git pull` al empezar la sesión, commit + push al terminar. Las automatizaciones (LaunchAgents del mini) solo hacen pull — nunca editar su árbol de trabajo sin pausar el agente. Los secretos (`.env`) se copian por `scp`, nunca por git.

Contexto completo: repo `camifran/contextos-ia` → `projects/infra-mac-mini-trabajo-remoto.md`.
