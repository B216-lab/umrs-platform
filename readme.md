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
1. [Установить](https://mise.jdx.dev/installing-mise.html#installing-mise) и [настроить](https://mise.jdx.dev/dev-tools/shims.html#shims) mise
2. Клонировать репозиторий
3. В корне проекта выполнить
```bash
mise trust
mise install
mise run build # или mise run b
mise run dev   # или mise bun d
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

### Локальные домены и контейнеры
Пока нет proxy или что там нужно для адекватной работы docker network в
контексте многих задач доступа к сервисам, нужно установить, что umrs-api это localhost
(для frontend скорее всего нужно сделать то же самое)

1. Сохранить конфиг hosts
```bash
sudo cp /etc/hosts ~/hosts.bak
```
 
2. Добавить в `/etc/hosts`
```bash
127.0.0.1  umrs-api
127.0.0.1  keycloak
```

## Production?
God bless
