package back.back.domain.financialratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSales is a Querydsl query type for Sales
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSales extends EntityPathBase<Sales> {

    private static final long serialVersionUID = 1483322282L;

    public static final QSales sales = new QSales("sales");

    public final StringPath companyCode = createString("companyCode");

    public final StringPath companyName = createString("companyName");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath salesFourYearsAgo = createString("salesFourYearsAgo");

    public final StringPath salesOneYearsAgo = createString("salesOneYearsAgo");

    public final StringPath salesThreeYearsAgo = createString("salesThreeYearsAgo");

    public final StringPath salesTwoYearsAgo = createString("salesTwoYearsAgo");

    public QSales(String variable) {
        super(Sales.class, forVariable(variable));
    }

    public QSales(Path<? extends Sales> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSales(PathMetadata metadata) {
        super(Sales.class, metadata);
    }

}

