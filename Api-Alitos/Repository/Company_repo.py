
from sqlalchemy import select
from sqlalchemy.orm.session import Session
from Models.company_model import Company, companyModel


class CompanyRepo:

    def data_company(self,session: Session):
     empresa = session.query(Company).all()
     return empresa

    def company_by_id(self,codigo: int ,session: Session):
     empresa = session.execute(select(Company).where(Company.codigo == codigo)).scalar()
     return empresa

    def update_company(self, codigo: int, datos: companyModel, session: Session):
        company = session.get(Company, codigo)
        try:
            company.direccion = datos.direccion
            company.telefono = datos.telefono
            company.telefono2 = datos.telefono2
            company.telefono3 = datos.telefono3
            company.instagram = datos.instagram
            company.facebook = datos.facebook
            company.email = datos.email
            session.commit()
        except: raise 'No se pudo'
        return company

    def add_sucursal(self, datos: companyModel, session: Session):
        sucursal = Company(codigo = datos.codigo, 
        direccion = datos.direccion, 
        telefono = datos.telefono, 
        telefono2 = datos.telefono2,
        telefono3 = datos.telefono3,
        instagram = datos.instagram,
        facebook = datos.facebook,
        email = datos.email
        )

        session.add(sucursal)
        session.commit()

        return sucursal

    def delete_sucursal(self,codigo : int, session: Session):
        sucursal = session.get(Company, codigo)
        session.delete(sucursal)
        session.commit()
        return "Sucursal eliminada"
