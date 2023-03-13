package back.back.domain.financialratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QNetProfit is a Querydsl query type for NetProfit
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QNetProfit extends EntityPathBase<NetProfit> {

    private static final long serialVersionUID = 493114847L;

    public static final QNetProfit netProfit = new QNetProfit("netProfit");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath previousFourthQuarter = createString("previousFourthQuarter");

    public final StringPath previousQuarter = createString("previousQuarter");

    public final StringPath previousSecondQuarter = createString("previousSecondQuarter");

    public final StringPath previousThirdQuarter = createString("previousThirdQuarter");

    public QNetProfit(String variable) {
        super(NetProfit.class, forVariable(variable));
    }

    public QNetProfit(Path<? extends NetProfit> path) {
        super(path.getType(), path.getMetadata());
    }

    public QNetProfit(PathMetadata metadata) {
        super(NetProfit.class, metadata);
    }

}

