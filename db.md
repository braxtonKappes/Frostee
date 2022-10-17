# DB

## Games

| Column Name     | Data Type   | Details                           |
| :---            | :---:       | ---:                              |
| id              | integer     | not null, PK                      |
| title           | string      | not null                          |
| description     | text        | not null                          |
| original_price  | float       | not null                          |
| current_price   | float       | not null                          |
| discount        | integer     | not null, default 0               |
| review_rating   | integer     | not null, default 0               |
| tags            | string[]    | not null, default []              |
| languages       | string[]    | not null, default []              |
| category        | string      | not null, FK                      | 
| genre           | string      | not null, FK                      | 
| developer       | string      | not null, FK                      |
| created_at      | timestamp   | not null, default now             |
| updated_at      | timestamp   | not null, default now             |

#

## Game_Addons

| Column Name     | Data Type   | Details                           |
| :---            | :---:       | ---:                              |
| id              | integer     | not null, PK                      |
| title           | string      | not null                          |
| description     | text        | not null                          |
| original_price  | float       | not null                          |
| current_price   | float       | not null                          |
| discount        | integer     | not null, default 0               |
| review_rating   | integer     | not null, default none            |
| game_tags       | string[]    | not null, default []              |
| game_languages  | string[]    | not null, default []              |
| game_belongsto  | integer     | not null, FK                      |
| category        | string      | not null, FK                      | 
| genre           | string      | not null, FK                      | 
| developer       | string      | not null, FK                      |
| created_at      | timestamp   | not null, default now             |
| updated_at      | timestamp   | not null, default now             |

#

## Categories

| Column Name     | Data Type   | Details                           |
| :---            | :---:       | ---:                              |
| id              | integer     | not null, PK                      |
| name            | string      | not null                          |
| created_at      | timestamp   | not null, default now             |
| updated_at      | timestamp   | not null, default now             |

#

## Tags

| Column Name     | Data Type   | Details                           |
| :---            | :---:       | ---:                              |
| id              | integer     | not null, PK                      |
| name            | string      | not null                          |
| created_at      | timestamp   | not null, default now             |
| updated_at      | timestamp   | not null, default now             |

#

## Reviews

| Column Name     | Data Type   | Details                            |
| :---            | :---:       | ---:                               |
| id              | integer     | not null, PK                       |
| username        | string      | not null, FK                       |
| user_id         | integer     | not null, FK                       |
| content         | text        | not null                           |
| review_type     | boolean     | not null                           |
| review_score    | integer     | not null, default 0                |
| created_at      | timestamp   | not null, default now              |
| updated_at      | timestamp   | not null, default now              |

#

## Users

| Column Name       | Data Type   | Details                           |
| :---              | :---:       | ---:                              |
| id                | integer     | not null, PK                      |
| username          | string      | not null                          |
| email             | string      | not null, unique                  |
| avatar            | string      | not null, default pic             |
| profile_background| string      | not null, default background      |
| profile_url       | string      | unique, default id + username?    |
| online_status     | string      | not null, default online?         |
| user_bio          | text        | not null, default none            |
| user_location     | string      | not null                          |
| user_balance      | float       | not null, default 0               |
| owned_games       | integer[]   | not null, default []              |
| user_friends      | integer[]   | not null, default []              |
| created_at        | timestamp   | not null, default now             |
| updated_at        | timestamp   | not null, default now             |

#

## Library (not needed?)

| Column Name       | Data Type   | Details                           |
| :---              | :---:       | ---:                              |
| id                | integer     | not null, PK                      |
| games             | TBD         | not null, FK                      |
