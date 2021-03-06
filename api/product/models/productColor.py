from mongoengine import *
from api.include.model import to_slug

class ProductColors(Document):
    name = StringField(max_length=100, required=True, unique=True)
    is_active = BooleanField(required=True, default=True)
    slug= StringField(max_length=100, required=True, unique=True)

    @classmethod
    def create_obj(cls, data):
        productcolor = cls(**data)
        productcolor.slug = to_slug(data['name'])
        productcolor.save()
        return productcolor

    @classmethod
    def update_obj(cls, slug, data):
        if 'name' in data:
            data['slug'] = to_slug(data['name'])
        productcolor = cls.objects(slug=slug)
        productcolor.update(**data)
        return productcolor

    def validation(data):
        err = []
        if 'name' not in data:
            err.append('Name cannot empty')
        return err
