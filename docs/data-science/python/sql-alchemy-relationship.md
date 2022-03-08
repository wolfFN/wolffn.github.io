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
# video_a.author = author_a

session.add(author_a)
session.add(video_a)
session.commit()



```