# UMRS

## Запуск
## Простое окружение разработки
```bash
docker compose --env-file ./.env.example -f docker-compose.dev.yml up -d
```

### [Mise](https://mise.jdx.dev)

1. [Установить](https://mise.jdx.dev/installing-mise.html#installing-mise) and [настроить](https://mise.jdx.dev/dev-tools/shims.html#shims) mise
2. Клонировать репозиторий
3. В корне проекта выполнить
```bash
mise trust
mise install
```


## Production?
```bash
cp .env.example .env
docker compose -f docker-compose.yml up -d
```