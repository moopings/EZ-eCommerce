from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

class productSize_Search_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/size'
    URL_SIZE = '/api/product/size/48'
    CREATE_BODY = """{ "name": "48" }"""


    def test_search_api(self):
        create_request(self.URL, self.CREATE_BODY)

        c = Client()
        res = c.get(self.URL_SIZE)
        data = json.loads(res.content.decode())

        self.assertEqual(data['name'], '48')
        self.assertEqual(data['is_active'], True)
