package back.back.domain.financialratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QOperatingProfit is a Querydsl query type for OperatingProfit
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOperatingProfit extends EntityPathBase<OperatingProfit> {

    private static final long serialVersionUID = -1465153533L;

    public static final QOperatingProfit operatingProfit = new QOperatingProfit("operatingProfit");

    public final StringPath companyCode = createString("companyCode");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath operatingProfitsFourYearsAgo = createString("operatingProfitsFourYearsAgo");

    public final StringPath operatingProfitsOneYearsAgo = createString("operatingProfitsOneYearsAgo");

    public final StringPath operatingProfitsThreeYearsAgo = createString("operatingProfitsThreeYearsAgo");

    public final StringPath operatingProfitsTwoYearsAgo = createString("operatingProfitsTwoYearsAgo");

    public QOperatingProfit(String variable) {
        super(OperatingProfit.class, forVariable(variable));
    }

    public QOperatingProfit(Path<? extends OperatingProfit> path) {
        super(path.getType(), path.getMetadata());
    }

    public QOperatingProfit(PathMetadata metadata) {
        super(OperatingProfit.class, metadata);
    }

}

