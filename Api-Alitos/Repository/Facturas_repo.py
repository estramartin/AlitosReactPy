from datetime import datetime
from sqlalchemy import select
from sqlalchemy.orm.session import Session
from Models.facturas_model import Facturas, FacturasItems, FacturasItemsModel, FacturasModel
from Models.product_model import TipoProductos
from Models.clients_model import Clientes

class FacturasRepo:

    def get_all(self, session:Session):
       factura = session.query(Facturas, Clientes,FacturasItems).select_from(Facturas).join(Clientes).join(FacturasItems).all()
       return factura

    def get_by_id(self, codigo: int, session: Session):
        factura = session.query(Facturas, Clientes, FacturasItems).select_from(Facturas).join(Clientes).join(FacturasItems).where(Facturas.numero_factura == codigo).all()
        return factura

    def get_by_name(self, nombre:str, session:Session):
        factura = session.query(Facturas, Clientes, FacturasItems).select_from(Facturas).join(Clientes).join(FacturasItems).where(Clientes.nombre.ilike(f'%{nombre}%')).all()
        return factura

    def add_factura(self,datos: FacturasModel, session:Session):
        facturas = Facturas(numero_factura = datos.numero_factura,codigo_articulo= datos.codigo_articulo,codigo_cliente= datos.codigo_cliente, fecha = datetime.now())
        print(facturas.fecha)
        session.add(facturas)
        session.commit()
        return facturas

    def delete_factura(self, codigo: int, session:Session):
        factura = session.get(Facturas,codigo)
        session.delete(factura)
        session.commit()
        return 'Factura eliminada'

    def update_factura(self, datos:FacturasModel, codigo:int, session:Session):

        factura = session.get(Facturas,codigo)

        factura.codigo_articulo = datos.codigo_articulo 
        factura.codigo_cliente =datos.codigo_cliente
        session.commit()

        return factura

   
    def get_all_items_from_factura(self,codigo: int ,session:Session):
       return session.execute(select(FacturasItems).where( FacturasItems.numero_factura== codigo)).scalars().all()


    def add_product_to_factura(self, datos: FacturasItemsModel, session:Session):
        item = FacturasItems(codigo_articulo = datos.codigo_articulo, numero_factura = datos.numero_factura, cantidad = datos.cantidad)
        session.add(item) 
        session.commit()
        return item

    def delete_product_to_factura(self, codigo:int, session:Session):
        item = session.get(FacturasItems,codigo)
        session.delete(item)
        session.commit()
        return 'Elemento Eliminado'

    def update_product_to_factura(self,codigo:int, datos: FacturasItemsModel, session:Session):
        item = session.execute(select(FacturasItems).where( FacturasItems.codigo_pk== codigo)).scalar()
        item.codigo_articulo = datos.codigo_articulo
        item.cantidad = datos.cantidad

        session.commit()
        return item