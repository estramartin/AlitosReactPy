from sqlalchemy import create_engine, engine
from sqlalchemy.orm import declarative_base, session


DBPostgres_url = 'postgresql+psycopg2://postgres:Qaws4503@localhost/Alitos' 

engine = create_engine(DBPostgres_url, echo = True)

localsession = session.sessionmaker(autocommit= False, autoflush=False, bind=engine )

Base = declarative_base()

def drop_all():
    Base.metadata.drop_all(bind= engine)


def create_all():
    Base.metadata.create_all(bind = engine)


def get_session():
    session = localsession()
    try:
        yield session
    except:
        session.close()
