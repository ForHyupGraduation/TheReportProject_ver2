package back.back.domain.ratio;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QNormalizedInterestRatio is a Querydsl query type for NormalizedInterestRatio
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QNormalizedInterestRatio extends EntityPathBase<NormalizedInterestRatio> {

    private static final long serialVersionUID = -1857255171L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QNormalizedInterestRatio normalizedInterestRatio = new QNormalizedInterestRatio("normalizedInterestRatio");

    public final back.back.domain.QCompany company;

    public final StringPath companyCode = createString("companyCode");

    public final StringPath date = createString("date");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Double> postPerDay = createNumber("postPerDay", Double.class);

    public final NumberPath<Double> tradingPerDay = createNumber("tradingPerDay", Double.class);

    public QNormalizedInterestRatio(String variable) {
        this(NormalizedInterestRatio.class, forVariable(variable), INITS);
    }

    public QNormalizedInterestRatio(Path<? extends NormalizedInterestRatio> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QNormalizedInterestRatio(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QNormalizedInterestRatio(PathMetadata metadata, PathInits inits) {
        this(NormalizedInterestRatio.class, metadata, inits);
    }

    public QNormalizedInterestRatio(Class<? extends NormalizedInterestRatio> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.company = inits.isInitialized("company") ? new back.back.domain.QCompany(forProperty("company"), inits.get("company")) : null;
    }

}

