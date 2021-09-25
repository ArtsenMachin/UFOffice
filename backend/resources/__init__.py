from resources.services.database import DB
from flask import Flask


app = Flask(__name__)


# Custom modules
import resources.routes
import resources.services
from resources.settings import host
