import os


INTERESTS_IN_DB_PATH = "../DB/interests"
NORMALIZED_INTERESTS_IN_DB_PATH = "../DB/normalizedInterests"
NORMALIZED_GROWTH_RATES_IN_DB_PATH = "../DB/normalizedGrowthRates"

YEARLY_OPERATING_PROFITS_DB_PATH_IN_DB = "../DB/yearly/operatingProfits"
YEARLY_SALES_PROFITS_DB_PATH_IN_DB = "../DB/yearly/sales"

MIN_MAX_IN_DB_PATH = "../DB"


if not os.path.exists("../DB/upjongNumbers"):
    os.makedirs("../DB/upjongNumbers")
