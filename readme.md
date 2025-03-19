# UMRS

## Запуск для разработки

1. [Установить](https://mise.jdx.dev/installing-mise.html#installing-mise) и [настроить](https://mise.jdx.dev/dev-tools/shims.html#shims) [mise](https://mise.jdx.dev)
2. Клонировать репозиторий
3. В корне проекта выполнить
```bash
mise trust
mise install
mise run dev
```

или

```bash
chmod +x ./bin/dev
./bin/dev
```
или


```bash
docker compose --env-file ./.env.example -f docker-compose.dev.yml up -d
```


## Production?
God bless