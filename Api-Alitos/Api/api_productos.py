
from fastapi import APIRouter
from fastapi.params import Depends
from sqlalchemy.orm.session import Session 
from Repository.Products_Repo import ProductsRepo
from DataBase.DB import get_session
from Models.product_model import ProductModel
products_router= APIRouter(prefix ='/products', tags=['/products'])


repo = ProductsRepo()


@products_router.get('/')
def all_products(session: Session = Depends(get_session)):
    products = repo.all_products(session)
    return products

@products_router.get('/{codigo}')
def get_by_id(codigo: int, session:Session= Depends(get_session)):
    return repo.get_by_id(codigo, session)

@products_router.get('/buscar/{gusto}')
def get_by_name(gusto:str, session:Session= Depends(get_session)):
    return repo.get_by_name(gusto, session)


@products_router.post('/', response_model=ProductModel)
def create_product(product:ProductModel, session: Session= Depends(get_session)):
    product = repo.create_product(session, product)
    return product

@products_router.delete('/{codigo}')
def delete_product(codigo:int, session: Session= Depends(get_session)):
    repo.delete_product(codigo, session)
    return 'Producto borrado exitosamente'

@products_router.put('/{codigo}', response_model= ProductModel)
def update_product(codigo: int, datos: ProductModel, session: Session = Depends(get_session)):
    return repo.update_producto(codigo, datos, session)

@products_router.get('/gustos/')
def get_tastes(session: Session= Depends(get_session)):
    return repo.get_tastes(session)