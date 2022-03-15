---
title: SQLAlchemy RelationShip
---

## One To One

``` python
from sqlalchemy import create_engine,Integer, String, Float, Column, ForeignKey
from sqlalchemy.orm import Session, relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Video(Base):
    __tablename__ = "video"

    id = Column(Integer, primary_key=True)
    code = Column('code', String(10))
    img = Column('img', String(100))
    score = Column('score', Float())

    author_id = Column(Integer, ForeignKey('author.id') )
    author = relationship('Author', uselist=False, back_populates='video' )

class Author(Base):
    __tablename__ = "author"
    id = Column(Integer, primary_key=True)
    name = Column('name', String(100))

    video = relationship('Video', uselist=False, back_populates='author' )



engine = create_engine(
    "mysql+pymysql://nodejs:nodejs@localhost:3306/nodejs", echo=True, future=True)

Base.metadata.create_all(engine)

session = Session(engine)


video_a = Video(code='new_video', img='123', score=9)
author_a = Author(name='test_author')

author_a.video = video_a
# also work
# video_a.author = author_a

session.add(author_a)
session.add(video_a)
session.commit()
```

## One To Many
``` python
class Video(Base):
    __tablename__ = "video"

    id = Column(Integer, primary_key=True)
    code = Column('code', String(10))
    img = Column('img', String(100))
    score = Column('score', Float())

    author_id = Column(Integer, ForeignKey('author.id'))
    author = relationship('Author',  back_populates='videos')


class Author(Base):
    __tablename__ = "author"
    id = Column(Integer, primary_key=True)
    name = Column('name', String(100))

    videos = relationship('Video', back_populates='author')


video_a = Video(code='video a', img='123', score=9)
video_b = Video(code='video b', img='123', score=8)
author_a = Author(name='test_author')


author_a.videos.append(video_a)
author_a.videos.append(video_b)

# also works
# video_a.author = author_a
# video_b.author = author_a

session.add(author_a)
session.commit()
```

## Many To Many

``` python
from sqlalchemy import create_engine, Integer, String, Float, Column, ForeignKey, Table
from sqlalchemy.orm import Session, relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

VideoAuthor = Table("video_author", Base.metadata,
    Column('author_id', Integer, ForeignKey( "author.id"), primary_key=True),
    Column('video_id', Integer, ForeignKey( "video.id"), primary_key=True)
)


class Video(Base):
    __tablename__ = "video"
    id = Column(Integer, primary_key=True)
    code = Column('code', String(10))
    img = Column('img', String(100))
    score = Column('score', Float())

    authors = relationship(
        'Author', secondary=VideoAuthor, back_populates='videos')


class Author(Base):
    __tablename__ = "author"
    id = Column(Integer, primary_key=True)
    name = Column('name', String(100))

    videos = relationship('Video', secondary=VideoAuthor,
                          back_populates='authors')


engine = create_engine(
    "mysql+pymysql://nodejs:nodejs@localhost:3306/nodejs", echo=True, future=True)

Base.metadata.create_all(engine)

session = Session(engine)


video_a = Video(code='video a', img='123', score=9)
video_b = Video(code='video b', img='123', score=8)
author_a = Author(name='test_author')
author_b = Author(name='author b')

author_a.videos.append(video_a)
author_b.videos.append(video_b)
author_b.videos.append(video_a)

session.add(author_a)
session.add(author_b)

session.commit()

```

如果想在 `relationship` 中添加 `extra_data`，使用如下方法。
``` python
class VideoAuthor(Base):
    __tablename__ = 'video_author'
    author_id = Column(Integer, ForeignKey("author.id"), primary_key=True)
    video_id = Column(Integer, ForeignKey("video.id"), primary_key=True)
    extra_data = Column(String(50))
    video = relationship("Video", back_populates="authors")
    author = relationship("Author", back_populates="videos")


class Video(Base):
    __tablename__ = "video"
    id = Column(Integer, primary_key=True)
    code = Column('code', String(10))
    img = Column('img', String(100))
    score = Column('score', Float())

    authors = relationship('VideoAuthor',  back_populates='video')


class Author(Base):
    __tablename__ = "author"
    id = Column(Integer, primary_key=True)
    name = Column('name', String(100))

    videos = relationship('VideoAuthor', back_populates='author')


video_a = Video(code='video a', img='123', score=9)
video_b = Video(code='video b', img='123', score=8)
author_a = Author(name='test_author')
author_b = Author(name='author b')

va_a_a = VideoAuthor(video=video_a, author=author_a, extra_data='a a')
va_a_b = VideoAuthor(video=video_a, author=author_b, extra_data='a b')
va_b_a = VideoAuthor(video=video_b, author=author_a, extra_data='b a')
va_b_b = VideoAuthor(video=video_b, author=author_b, extra_data='b b')

session.add(va_a_a)
session.add(va_a_b)
session.add(va_b_a)
session.add(va_b_b)

session.commit()
```