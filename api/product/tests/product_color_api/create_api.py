from django.test import Client
from test_addons import MongoTestCase
from api.include.test import create_request
import json

json_type = "application/json"

class productColor_Create_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'
    URL_COLOR = '/api/product/color/white'
    CREATE_BODY = """{ "name": "white" }"""


    def test_create_api(self):
        res = create_request(self.URL, self.CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['created'], True)


class productColor_Create_Fail_API_Test(MongoTestCase):
    CLEAR_CACHE = True

    URL = '/api/product/color'


    def test_create_no_name(self):
        CREATE_BODY = """{}"""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Name cannot empty'])
        self.assertEqual(data['created'], False)


    def test_create_no_data(self):
        CREATE_BODY = ""

        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['JSON Decode error'])
        self.assertEqual(data['created'], False)


    def test_create_color_duplicated(self):
        CREATE_BODY = """{"name": "White"}"""

        create_request(self.URL, CREATE_BODY)
        res = create_request(self.URL, CREATE_BODY)
        data = json.loads(res.content.decode())

        self.assertEqual(data['errorMsg'], ['Color already exist'])
        self.assertEqual(data['created'], False)