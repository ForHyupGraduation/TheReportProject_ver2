package back.back.domain.financialratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QOperatingProfitMargin is a Querydsl query type for OperatingProfitMargin
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOperatingProfitMargin extends EntityPathBase<OperatingProfitMargin> {

    private static final long serialVersionUID = -1282823279L;

    public static final QOperatingProfitMargin operatingProfitMargin = new QOperatingProfitMargin("operatingProfitMargin");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath previousFourthQuarter = createString("previousFourthQuarter");

    public final StringPath previousQuarter = createString("previousQuarter");

    public final StringPath previousSecondQuarter = createString("previousSecondQuarter");

    public final StringPath previousThirdQuarter = createString("previousThirdQuarter");

    public QOperatingProfitMargin(String variable) {
        super(OperatingProfitMargin.class, forVariable(variable));
    }

    public QOperatingProfitMargin(Path<? extends OperatingProfitMargin> path) {
        super(path.getType(), path.getMetadata());
    }

    public QOperatingProfitMargin(PathMetadata metadata) {
        super(OperatingProfitMargin.class, metadata);
    }

}

