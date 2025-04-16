# UMRS

## Структура 
Платформа
- [Frontend](https://github.com/EgorGordinskiy/client-umrs)
- [Backend](https://github.com/EgorGordinskiy/umrs-api)

Legacy анкеты
- [Backend](https://github.com/EgorGordinskiy/umrs-server)
- Frontend???

## Запуск для разработки

### С помощью [mise](https://mise.jdx.dev)
1. [Установить](https://mise.jdx.dev/installing-mise.html#installing-mise) и [настроить](https://mise.jdx.dev/dev-tools/shims.html#shims) 
2. Клонировать репозиторий
3. В корне проекта выполнить
```bash
mise trust
mise install
mise run build
mise run dev
```
### С помощью скрипта

```bash
chmod +x ./bin/dev
./bin/dev
```

### Вручную

```bash
docker compose --env-file ./.env.example -f docker-compose.dev.yml build
docker compose --env-file ./.env.example -f docker-compose.dev.yml up -d
```


## Production?
God bless
