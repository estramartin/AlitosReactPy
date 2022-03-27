from fastapi import APIRouter
from fastapi.params import Depends
from Models.company_model import companyModel
from sqlalchemy.orm.session import Session
from Repository.Company_repo import CompanyRepo
from DataBase.DB import get_session
from typing import List


company_router = APIRouter(prefix='/company' ,tags=['/Company'])

repo =  CompanyRepo()

@company_router.get('/', response_model=List[companyModel])
def data_company(session:Session =Depends(get_session)):
    return repo.data_company(session)

@company_router.get('/{codigo}', response_model=companyModel)
def company_by_id( codigo : int,session:Session =Depends(get_session)):
    return repo.company_by_id(codigo,session)


@company_router.put('/{codigo}', response_model=companyModel)
def update_company(codigo: int , datos: companyModel, session: Session = Depends(get_session)):
    return repo.update_company(codigo, datos, session)

@company_router.post('/', response_model=companyModel)
def add_sucursal(datos: companyModel, session: Session = Depends(get_session) ):
    return repo.add_sucursal(datos,session)

@company_router.delete('/{codigo}')
def delete_sucursal(codigo: int, session: Session =Depends(get_session)):
    repo.delete_sucursal(codigo, session)
    return 'Sucursal borrada exitosamente'