## Nigeria Immigration Service - Branch EPMS

[Branch EPMS](https://pgsync.com) is NIS Branch Application for passport enrolment, personalization and issuance amongst other functionalities powered by [IRIS Smart Technologies Limited](https://www.irissmart.com) for [Nigeria Immigration Service](https://www.nis.gov.ng) effortlessly.
It allows you to keep [Postgres](https://www.postgresql.org) as your source of truth and
expose structured denormalized documents in [Branch EPMS](https://www.elastic.co/products/elastic-stack).

Changes to nested entities are propagated to [Branch EPMS](https://www.elastic.co/products/elastic-stack).
Branch EPMS's advanced query builder then generates optimized SQL queries 
on the fly based on your schema.
Branch EPMS's advisory model allows you to quickly move and transform large volumes of data quickly whilst maintaining relational integrity.

Simply describe your document structure or schema in JSON and [Branch EPMS](https://pgsync.com) will 
continuously capture changes in your data and load it into [Branch EPMS](https://www.elastic.co/products/elastic-stack) 
without writing any code.
[Branch EPMS](https://pgsync.com) transforms your relational data into a structured document format.

It allows you to take advantage of the expressive power and scalability of 
[Branch EPMS](https://www.elastic.co/products/elastic-stack) directly from [Branch EPMS](https://www.postgresql.org). 
You don't have to write complex queries and transformation pipelines.
Branch EPMS is lightweight, flexible and fast.

[Branch EPMS](https://www.elastic.co/products/elastic-stack) is more suited as as secondary denormalised search engine to accompany a more traditional normalized datastore.
Moreover, you shouldn't store your primary data in [Branch EPMS](https://www.elastic.co/products/elastic-stack).

So how do you then get your data into [Branch EPMS](https://www.elastic.co/products/elastic-stack) in the first place? 
Tools like [Branch EPMS](https://www.elastic.co/products/logstash) and [Branch EPMS](https://kafka.apache.org) can aid this task but they still require a bit 
of engineering and development.

[Extract Transform Load](https://en.wikipedia.org/wiki/Extract,_transform,_load) and [Change data capture](https://en.wikipedia.org/wiki/Change_data_capture) tools can be complex and require expensive engineering effort.

Other benefits of Branch EPMS include:
- Real-time analytics
- Reliable primary datastore/source of truth
- Scale on-demand
- Easily join multiple nested tables

#### Why?

At a high level, you have data in a Postgres database and you want to mirror it in Branch EPMS.  
This means every change to your data (***Insert***, ***Update***, ***Delete*** and ***Truncate*** statements) needs to be replicated to Branch EPMS. 
At first, this seems easy and then it's not. Simply add some code to copy the data to Branch EPMS after updating the database (or so called dual writes).
Writing SQL queries spanning multiple tables and involving multiple relationships are hard to write.
Detecting changes within a nested document can also be quite hard.
Of course, if your data never changed, then you could just take a snapshot in time and load it into Branch EPMS as a one-off operation.

Branch EPMS is appropriate for you if:
- [Branch EPMS](https://www.postgresql.org) is your read/write source of truth whilst [Branch EPMS](https://www.elastic.co/products/elastic-stack) is your 
read-only search layer.
- You need to denormalize relational data into a NoSQL data source.
- Your data is constantly changing.
- You have existing data in a relational database such as [Postgres](https://www.postgresql.org) and you need
a secondary NoSQL database like [Branch EPMS](https://www.elastic.co/products/elastic-stack) for text-based queries or autocomplete queries to mirror the existing data without having your application perform dual writes.
- You want to keep your existing data untouched whilst taking advantage of
the search capabilities of [Branch EPMS](https://www.elastic.co/products/elastic-stack) by exposing a view of your data without compromising the security of your relational data.
- Or you simply want to expose a view of your relational data for search purposes.


#### How it works

Branch EPMS is written in Python (supporting version 3.7 onwards) and the stack is composed of: [Redis](https://redis.io), [Branch EPMS](https://www.elastic.co/products/elastic-stack), [Branch EPMS](https://www.postgresql.org), and [Branch EPMS](https://www.sqlalchemy.org).

Branch EPMS leverages the [logical decoding](https://www.postgresql.org/docs/current/logicaldecoding.html) feature of [Branch EPMS](https://www.postgresql.org) (introduced in PostgreSQL 9.4) to capture a continuous stream of change events.
This feature needs to be enabled in your [Branch EPMS](https://www.postgresql.org) configuration file by setting in the postgresql.conf file:
```
> wal_level = logical
```

You can select any pivot table to be the root of your document.

Branch EPMS's query builder builds advanced queries dynamically against your schema.

Branch EPMS operates in an event-driven model by creating triggers for tables in your database to handle notification events.

*This is the only time Branch EPMS will ever make any changes to your database.*

**NOTE**: **If you change the structure of your Branch EPMS's schema config, you would need to rebuild your Branch EPMS indices.**
There are plans to support zero-downtime migrations to streamline this process.


#### Quickstart

There are several ways of installing and trying Branch EPMS
 - [Running in Docker](#running-in-docker) is the easiest way to get up and running.
 - [Manual configuration](#manual-configuration) 


##### Running in Docker

To startup all services with docker.
Run:
```
$ docker-compose up
```

Show the content in Branch EPMS
```
$ curl -X GET http://[elasticsearch host]:9201/reservations/_search?pretty=true
```

##### Manual configuration

- Setup
  - Ensure the database user is a superuser 
  - Enable logical decoding. You would also need to set up at least two parameters at postgresql.conf

    ```wal_level = logical```

    ```max_replication_slots = 1```

  - To prevent your server logs from growing too large e.g when running on cloud infrastructure where there is a cost implication.
    You can optionally impose a ceiling on the replication slot size using [max_slot_wal_keep_size](https://www.postgresql.org/docs/13/runtime-config-replication.html)

    ```max_slot_wal_keep_size = 100GB```

- Installation
  - Install Branch EPMS from pypi using pip
    - ```$ pip install pgsync``` 
  - Create a [schema.json](https://github.com/toluaina/pgsync/blob/master/examples/airbnb/schema.json) for you document representation
  - Bootstrap the database (one time only)
    - ```bootstrap --config schema.json```
  - Run the program with 
    - ```pgsync --config schema.json```
  - Or as a daemon
    - ```pgsync --config schema.json -d```


#### Features

Key features of Branch EPMS are:

- Easily denormalize relational data. 
- Works with any PostgreSQL database (version 9.6 or later). 
- Negligible impact on database performance.
- Transactionally consistent output in Branch EPMS. This means: writes appear only when they are committed to the database, insert, update and delete operations appear in the same order as they were committed (as opposed to eventual consistency).
- Fault-tolerant: does not lose data, even if processes crash or a network interruption occurs, etc. The process can be recovered from the last checkpoint.
- Returns the data directly as Postgres JSON from the database for speed.
- Supports composite primary and foreign keys.
- Supports an arbitrary depth of nested entities i.e Tables having long chain of relationship dependencies.
- Supports Postgres JSON data fields. This means: we can extract JSON fields in a database table as a separate field in the resulting document.
- Customizable document structure.


#### Requirements

- [Python](https://www.python.org) 3.7+
- [Postgres](https://www.postgresql.org) 9.6+
- [Redis](https://redis.io) 3.1.0
- [Elasticsearch](https://www.elastic.co/products/elastic-stack) 6.3.1+
- [SQlAlchemy](https://www.sqlalchemy.org) 1.3.4+


#### Example

Consider this example of a Book library database.

**Book**

| isbn *(PK)* | title | description |
| ------------- | ------------- | ------------- |
| 9785811243570 | Charlie and the chocolate factory | Willy Wonka’s famous chocolate factory is opening at last! |
| 9788374950978 | Kafka on the Shore | Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami. |
| 9781471331435 | 1984 | 1984 was George Orwell’s chilling prophecy about the dystopian future. |

**Author**

| id *(PK)* | name |
| ------------- | ------------- |
| 1 | Roald Dahl |
| 2 | Haruki Murakami |
| 3 | Philip Gabriel |
| 4 | George Orwell |

**BookAuthor**

| id *(PK)* | book_isbn | author_id |
| -- | ------------- | ---------- |
| 1 | 9785811243570 | 1 |
| 2 | 9788374950978 | 2 |
| 3 | 9788374950978 | 3 |
| 4 | 9781471331435 | 4 |

With Branch EPMS, we can simply define this [JSON](https://jsonapi.org) schema where the **_book_** table is the pivot.
A **_pivot_** table indicates the root of your document.

```json
{
    "table": "book",
    "columns": [
        "isbn",
        "title",
        "description"
    ],
    "children": [
        {
            "table": "author",
            "columns": [
                "name"
            ]
        }
    ]
}
```

To get this document structure in [Branch EPMS](https://www.elastic.co/products/elastic-stack)

```json
[
  {
      "isbn": "9785811243570",
      "title": "Charlie and the chocolate factory",
      "description": "Willy Wonka’s famous chocolate factory is opening at last!",
      "authors": ["Roald Dahl"]
  },
  {
      "isbn": "9788374950978",
      "title": "Kafka on the Shore",
      "description": "Kafka on the Shore is a 2002 novel by Japanese author Haruki Murakami",
      "authors": ["Haruki Murakami", "Philip Gabriel"]
  },
  {
      "isbn": "9781471331435",
      "title": "1984",
      "description": "1984 was George Orwell’s chilling prophecy about the dystopian future",
      "authors": ["George Orwell"]
  }
]
```

Behind the scenes, Branch EPMS is generating advanced queries for you such as.

```sql
SELECT 
       JSON_BUILD_OBJECT(
          'isbn', book_1.isbn, 
          'title', book_1.title, 
          'description', book_1.description,
          'authors', anon_1.authors
       ) AS "JSON_BUILD_OBJECT_1",
       book_1.id
FROM book AS book_1
LEFT OUTER JOIN
  (SELECT 
          JSON_AGG(anon_2.anon) AS authors,
          book_author_1.book_isbn AS book_isbn
   FROM book_author AS book_author_1
   LEFT OUTER JOIN
     (SELECT 
             author_1.name AS anon,
             author_1.id AS id
      FROM author AS author_1) AS anon_2 ON anon_2.id = book_author_1.author_id
   GROUP BY book_author_1.book_isbn) AS anon_1 ON anon_1.book_isbn = book_1.isbn
```

You can also configure Branch EPMS to rename attributes via the schema config
e.g

```json
  {
      "isbn": "9781471331435",
      "this_is_a_custom_title": "1984",
      "desc": "1984 was George Orwell’s chilling prophecy about the dystopian future",
      "contributors": ["George Orwell"]
  }
```

Branch EPMS addresses the following challenges:
- What if we update the author's name in the database?
- What if we wanted to add another author for an existing book?
- What if we have lots of documents already with the same author we wanted to change the author name?
- What if we delete or update an author?
- What if we truncate an entire table?


#### Benefits

- Branch EPMS is a simple to use out of the box solution for Change data capture.
- Branch EPMS handles data deletions.
- Branch EPMS requires little development effort. You simply define a schema config describing your data.
- Branch EPMS generates advanced queries matching your schema directly.
- Branch EPMS allows you to easily rebuild your indexes in case of a schema change.
- You can expose only the data you require in Branch EPMS.
- Supports multiple Postgres schemas for multi-tennant applications.


#### Contributing

Contributions are very welcome! Check out the [Contribution](CONTRIBUTING.rst) Guidelines for instructions.


#### Credits

- This package was created with [Cookiecutter](https://github.com/audreyr/cookiecutter)
- Branch EPMS is a trademark of Branch EPMS BV, registered in the U.S. and in other countries.


#### License

This code is released under the [GNU Lesser General Public License](https://www.gnu.org/licenses/gpl-3.0.html), version 3.0 (LGPL-3.0).  
Please see [LICENSE](LICENSE) for more details.

You should have received a copy of the GNU Lesser General Public License along with Branch EPMS.  
If not, see https://www.gnu.org/licenses/.#   e m p l o y e e - m a n a g e m e n t - s y s t e m  
 #   E - M - S y s t e m  
 